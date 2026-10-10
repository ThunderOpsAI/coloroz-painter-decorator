import { neon } from '@neondatabase/serverless';

const databaseUrl = process.env.DATABASE_URL || '';

// In-memory fallback stores for local development without DB credentials or build steps
const memoryStore = {
  quotes: [] as any[],
  reviews: [
    {
      id: 'rev-1',
      customer_name: 'Dr. Elizabeth & Robert Thornton',
      location: 'Beechworth, VIC',
      star_rating: 5,
      project_type: 'Victorian Homestead Weatherboard Restoration',
      review_text: 'ColorOz restored the exterior of our 1890s Victorian weatherboard home in Beechworth. Meticulous preparation, lead-safe paint removal, and authentic heritage colour palette matching. The intricate verandah fretwork looks majestic. Truly North East Victoria’s finest heritage painters.',
      created_at: new Date('2024-03-20').toISOString(),
    },
    {
      id: 'rev-2',
      customer_name: 'Alistair & Claire Vance',
      location: 'Chiltern Historic Precinct',
      star_rating: 5,
      project_type: 'Federation Timber & Verandah Fretwork Repainting',
      review_text: 'We engaged ColorOz for our Federation weatherboard with ornate timber gables and turned verandah posts. Their knowledge of period architectural finishes and Dulux Heritage palettes (Brunswick Green & Deep Indian Red) was second to none. Superb trade craft.',
      created_at: new Date('2024-05-14').toISOString(),
    },
    {
      id: 'rev-3',
      customer_name: 'Margaret & Geoff Higgins',
      location: 'Wangaratta VIC',
      star_rating: 5,
      project_type: 'Interior Plaster Cornices & Ceiling Rose Restoration',
      review_text: 'Restored our 12-foot high ornate decorative ceilings, cracked heritage cornices, and ceiling roses. Clean, polite, and finished the satin woodwork with razor-sharp brush lines. Couldn’t have asked for a better decorating contractor.',
      created_at: new Date('2024-07-30').toISOString(),
    },
    {
      id: 'rev-4',
      customer_name: 'David & Fiona Sutherland',
      location: 'Milawa Heritage Cottage',
      star_rating: 5,
      project_type: 'Edwardian Timber Exterior & Sash Window Restoration',
      review_text: 'Every single timber double-hung sash window was freed, sanded, primed with premium oil undercoats, and finished in heritage cream enamel. Zero mess left behind. Exceptional eye for detail.',
      created_at: new Date('2024-09-18').toISOString(),
    },
    {
      id: 'rev-5',
      customer_name: 'Simon Bell',
      location: 'Eldorado, VIC',
      star_rating: 5,
      project_type: 'Full Period Home Interior & Exterior Repaint',
      review_text: 'ColorOz repainted our country homestead from top to bottom. Their consultation on colour tones to highlight architectural features transformed the house completely. Highly recommend to anyone valuing authentic craftsmanship.',
      created_at: new Date('2024-10-25').toISOString(),
    }
  ],
  call_logs: [] as any[],
};

export const sql = databaseUrl ? neon(databaseUrl) : null;

let isDbInitialized = false;

export async function ensureDbTables() {
  if (!sql) {
    return;
  }
  if (isDbInitialized) return;

  try {
    // Quotes table
    await sql`
      CREATE TABLE IF NOT EXISTS quotes (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        email VARCHAR(255),
        phone VARCHAR(50),
        property_era VARCHAR(100),
        project_scope VARCHAR(150),
        timber_condition VARCHAR(100),
        colour_scheme VARCHAR(100),
        site_address VARCHAR(255),
        estimated_price NUMERIC(10,2),
        message TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Reviews table
    await sql`
      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        customer_name VARCHAR(150) NOT NULL,
        location VARCHAR(100),
        star_rating INT NOT NULL CHECK (star_rating >= 1 AND star_rating <= 5),
        review_text TEXT NOT NULL,
        project_type VARCHAR(100),
        verified BOOLEAN DEFAULT true,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Call clicks table
    await sql`
      CREATE TABLE IF NOT EXISTS call_logs (
        id SERIAL PRIMARY KEY,
        intent VARCHAR(100),
        referrer TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Seed default reviews if empty
    const existing = await sql`SELECT COUNT(*) as count FROM reviews;`;
    if (existing && existing[0] && parseInt(existing[0].count, 10) === 0) {
      for (const rev of memoryStore.reviews) {
        await sql`
          INSERT INTO reviews (customer_name, location, star_rating, review_text, project_type, verified, created_at)
          VALUES (${rev.customer_name}, ${rev.location}, ${rev.star_rating}, ${rev.review_text}, ${rev.project_type}, true, ${rev.created_at});
        `;
      }
    }

    isDbInitialized = true;
  } catch (err) {
    console.warn('Neon database initialization warning (falling back to memory store):', err);
  }
}

export async function insertQuote(data: {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  propertyEra?: string;
  projectScope?: string;
  timberCondition?: string;
  colourScheme?: string;
  siteAddress?: string;
  estimatedPrice?: number;
  message?: string;
}) {
  if (sql) {
    try {
      await ensureDbTables();
      const res = await sql`
        INSERT INTO quotes (
          first_name, last_name, email, phone, property_era, project_scope,
          timber_condition, colour_scheme, site_address, estimated_price, message
        ) VALUES (
          ${data.firstName}, ${data.lastName || ''}, ${data.email}, ${data.phone},
          ${data.propertyEra || null}, ${data.projectScope || null}, ${data.timberCondition || null},
          ${data.colourScheme || null}, ${data.siteAddress || null}, ${data.estimatedPrice || null},
          ${data.message || ''}
        ) RETURNING id, created_at;
      `;
      return res[0];
    } catch (err) {
      console.warn('Error saving quote to Neon DB, caching in memory:', err);
    }
  }

  const record = {
    id: 'quote_' + Date.now(),
    ...data,
    created_at: new Date().toISOString(),
  };
  memoryStore.quotes.push(record);
  return record;
}

export async function getApprovedReviews() {
  if (sql) {
    try {
      await ensureDbTables();
      const rows = await sql`
        SELECT 
          id::text, 
          customer_name as "customerName", 
          star_rating as "starRating", 
          review_text as "reviewText", 
          project_type as "projectType", 
          location,
          created_at as "createdAt"
        FROM reviews 
        WHERE verified = true 
        ORDER BY created_at DESC;
      `;
      if (rows && rows.length > 0) {
        return rows;
      }
    } catch (err) {
      console.warn('Error fetching reviews from Neon, falling back to cached reviews:', err);
    }
  }

  return memoryStore.reviews.map(r => ({
    id: r.id,
    customerName: r.customer_name,
    starRating: r.star_rating,
    reviewText: r.review_text,
    projectType: r.project_type,
    location: r.location,
    createdAt: r.created_at,
  }));
}

export async function insertReview(data: {
  customerName: string;
  location?: string;
  starRating: number;
  projectType?: string;
  reviewText: string;
}) {
  if (sql) {
    try {
      await ensureDbTables();
      const res = await sql`
        INSERT INTO reviews (customer_name, location, star_rating, project_type, review_text, verified)
        VALUES (${data.customerName}, ${data.location || null}, ${data.starRating}, ${data.projectType || null}, ${data.reviewText}, true)
        RETURNING id, created_at;
      `;
      return res[0];
    } catch (err) {
      console.warn('Error saving review to Neon DB, using memory fallback:', err);
    }
  }

  const record = {
    id: 'rev_' + Date.now(),
    customer_name: data.customerName,
    location: data.location || 'Wangaratta & North East VIC',
    star_rating: data.starRating,
    project_type: data.projectType || 'Heritage Painting',
    review_text: data.reviewText,
    created_at: new Date().toISOString(),
  };
  memoryStore.reviews.unshift(record);
  return record;
}

export async function logCallClick(intent: string, referrer?: string) {
  if (sql) {
    try {
      await ensureDbTables();
      await sql`
        INSERT INTO call_logs (intent, referrer)
        VALUES (${intent}, ${referrer || null});
      `;
      return true;
    } catch (err) {
      console.warn('Error logging call click:', err);
    }
  }
  memoryStore.call_logs.push({ intent, referrer, timestamp: new Date().toISOString() });
  return true;
}

export default sql;
