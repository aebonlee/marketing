import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;

const getSupabase = () => {
  if (!supabase && supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        autoRefreshToken: true,
        persistSession: true,
      }
    });
  }
  return supabase;
};

const POSTS_PER_PAGE = 10;
const SITE_DOMAIN = window.location.hostname;

export const getPosts = async (page = 1, category = null) => {
  const client = getSupabase();
  if (!client) return { posts: [], total: 0 };

  let query = client
    .from('mkt_posts')
    .select('*', { count: 'exact' })
    .eq('site_domain', SITE_DOMAIN)
    .order('created_at', { ascending: false });

  if (category) {
    query = query.eq('category', category);
  }

  const from = (page - 1) * POSTS_PER_PAGE;
  const to = from + POSTS_PER_PAGE - 1;
  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error('getPosts error:', error);
    return { posts: [], total: 0 };
  }

  return { posts: data || [], total: count || 0 };
};

export const getPostById = async (id) => {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('mkt_posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('getPostById error:', error);
    return null;
  }

  return data;
};

export const createPost = async (postData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('mkt_posts')
    .insert({ ...postData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deletePost = async (id) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('mkt_posts')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

export const incrementViews = async (id) => {
  const client = getSupabase();
  if (!client) return;

  await client.rpc('mkt_increment_views', { post_id: id }).catch(() => {
    client
      .from('mkt_posts')
      .update({ views: client.sql`views + 1` })
      .eq('id', id)
      .then(() => {})
      .catch(() => {});
  });
};

export const getComments = async (postId) => {
  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from('mkt_comments')
    .select('*')
    .eq('post_id', postId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('getComments error:', error);
    return [];
  }

  return data || [];
};

export const createComment = async (commentData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('mkt_comments')
    .insert({ ...commentData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteComment = async (id) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('mkt_comments')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

export const searchPosts = async (query) => {
  const client = getSupabase();
  if (!client || !query.trim()) return [];

  const pattern = `%${query.trim()}%`;

  const { data, error } = await client
    .from('mkt_posts')
    .select('id, title, author_name, created_at')
    .eq('site_domain', SITE_DOMAIN)
    .or(`title.ilike.${pattern},content.ilike.${pattern}`)
    .order('created_at', { ascending: false })
    .limit(5);

  if (error) {
    console.error('searchPosts error:', error);
    return [];
  }

  return data || [];
};

export const getLectures = async (category = null) => {
  const client = getSupabase();
  if (!client) return [];

  let query = client
    .from('mkt_lectures')
    .select('*')
    .eq('site_domain', SITE_DOMAIN)
    .eq('is_published', true);

  if (category) {
    query = query.eq('category', category);
  }

  const { data, error } = await query.order('week_number', { ascending: true });

  if (error) {
    console.error('getLectures error:', error);
    return [];
  }

  return data || [];
};

export const getLectureById = async (id) => {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('mkt_lectures')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('getLectureById error:', error);
    return null;
  }

  return data;
};

export const createLecture = async (lectureData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('mkt_lectures')
    .insert({ ...lectureData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateLecture = async (id, lectureData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('mkt_lectures')
    .update({ ...lectureData, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteLecture = async (id) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('mkt_lectures')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

export const incrementLectureViews = async (id) => {
  const client = getSupabase();
  if (!client) return;

  await client.rpc('mkt_increment_lecture_views', { lecture_id: id }).catch(() => {});
};

export const getAllProfiles = async () => {
  const client = getSupabase();
  if (!client) return [];

  const domain = window.location.hostname;

  const { data, error } = await client
    .from('user_profiles')
    .select('*')
    .eq('signup_domain', domain)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('getAllProfiles error:', error);
    return [];
  }

  return data || [];
};

export const updateLastLogin = async (userId) => {
  const client = getSupabase();
  if (!client) return;

  await client.rpc('update_last_login', { target_user_id: userId }).catch(() => {});
};

// --- Gallery ---

const GALLERY_PER_PAGE = 12;

export const getGalleryItems = async (page = 1, category = null) => {
  const client = getSupabase();
  if (!client) return { items: [], total: 0 };

  let query = client
    .from('mkt_gallery')
    .select('*', { count: 'exact' })
    .eq('site_domain', SITE_DOMAIN)
    .order('created_at', { ascending: false });

  if (category) {
    query = query.eq('category', category);
  }

  const from = (page - 1) * GALLERY_PER_PAGE;
  const to = from + GALLERY_PER_PAGE - 1;
  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error('getGalleryItems error:', error);
    return { items: [], total: 0 };
  }

  return { items: data || [], total: count || 0 };
};

export const getGalleryItemById = async (id) => {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('mkt_gallery')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('getGalleryItemById error:', error);
    return null;
  }

  return data;
};

export const createGalleryItem = async (itemData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('mkt_gallery')
    .insert({ ...itemData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateGalleryItem = async (id, itemData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('mkt_gallery')
    .update(itemData)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteGalleryItem = async (id) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('mkt_gallery')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

export const incrementGalleryViews = async (id) => {
  const client = getSupabase();
  if (!client) return;

  await client.rpc('mkt_increment_gallery_views', { item_id: id }).catch(() => {});
};

export const getGalleryComments = async (galleryId) => {
  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from('mkt_gallery_comments')
    .select('*')
    .eq('gallery_id', galleryId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('getGalleryComments error:', error);
    return [];
  }

  return data || [];
};

export const createGalleryComment = async (commentData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('mkt_gallery_comments')
    .insert({ ...commentData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteGalleryComment = async (id) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('mkt_gallery_comments')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

// --- Portfolio ---

const PORTFOLIO_PER_PAGE = 12;

export const getPortfolios = async (page = 1) => {
  const client = getSupabase();
  if (!client) return { items: [], total: 0 };

  const from = (page - 1) * PORTFOLIO_PER_PAGE;
  const to = from + PORTFOLIO_PER_PAGE - 1;

  const { data, error, count } = await client
    .from('mkt_portfolio')
    .select('*', { count: 'exact' })
    .eq('site_domain', SITE_DOMAIN)
    .order('created_at', { ascending: false })
    .range(from, to);

  if (error) {
    console.error('getPortfolios error:', error);
    return { items: [], total: 0 };
  }

  return { items: data || [], total: count || 0 };
};

export const getPortfolioById = async (id) => {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('mkt_portfolio')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('getPortfolioById error:', error);
    return null;
  }

  return data;
};

export const createPortfolio = async (portfolioData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('mkt_portfolio')
    .insert({ ...portfolioData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updatePortfolio = async (id, portfolioData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('mkt_portfolio')
    .update(portfolioData)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deletePortfolio = async (id) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('mkt_portfolio')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

export const incrementPortfolioViews = async (id) => {
  const client = getSupabase();
  if (!client) return;

  await client.rpc('mkt_increment_portfolio_views', { item_id: id }).catch(() => {});
};

export const getPortfolioComments = async (portfolioId) => {
  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from('mkt_portfolio_comments')
    .select('*')
    .eq('portfolio_id', portfolioId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('getPortfolioComments error:', error);
    return [];
  }

  return data || [];
};

export const createPortfolioComment = async (commentData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('mkt_portfolio_comments')
    .insert({ ...commentData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deletePortfolioComment = async (id) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('mkt_portfolio_comments')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

// --- Websites ---

const WEBSITES_PER_PAGE = 12;

export const getWebsites = async (page = 1, category = null) => {
  const client = getSupabase();
  if (!client) return { items: [], total: 0 };

  let query = client
    .from('mkt_websites')
    .select('*', { count: 'exact' })
    .eq('site_domain', SITE_DOMAIN)
    .order('created_at', { ascending: false });

  if (category) {
    query = query.eq('category', category);
  }

  const from = (page - 1) * WEBSITES_PER_PAGE;
  const to = from + WEBSITES_PER_PAGE - 1;
  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error('getWebsites error:', error);
    return { items: [], total: 0 };
  }

  return { items: data || [], total: count || 0 };
};

export const getWebsiteById = async (id) => {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('mkt_websites')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('getWebsiteById error:', error);
    return null;
  }

  return data;
};

export const createWebsite = async (itemData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('mkt_websites')
    .insert({ ...itemData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateWebsite = async (id, itemData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('mkt_websites')
    .update(itemData)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteWebsite = async (id) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('mkt_websites')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

export const incrementWebsiteViews = async (id) => {
  const client = getSupabase();
  if (!client) return;

  await client.rpc('mkt_increment_website_views', { item_id: id }).catch(() => {});
};

export const getWebsiteComments = async (websiteId) => {
  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from('mkt_websites_comments')
    .select('*')
    .eq('website_id', websiteId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('getWebsiteComments error:', error);
    return [];
  }

  return data || [];
};

export const createWebsiteComment = async (commentData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('mkt_websites_comments')
    .insert({ ...commentData, site_domain: SITE_DOMAIN })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteWebsiteComment = async (id) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('mkt_websites_comments')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

export default getSupabase;
