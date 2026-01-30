-- Make job_role optional
ALTER TABLE public.waitlist ALTER COLUMN job_role DROP NOT NULL;