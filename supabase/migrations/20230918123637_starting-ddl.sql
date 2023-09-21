create table user_profiles (
  user_id uuid primary key references auth.users (id) not null,
  username text unique not null
  CONSTRAINT proper_username CHECK (username ~* '^[a-zA-Z0-9_]+$')
  CONSTRAINT username_length CHECK (char_length(username) > 3 and char_length(username) < 15),
  avatar text,
  userrole int
);

create table up (
  id uuid primary key,
  name text,
  avatar text,
  userrole int
);

create table categories (
  id uuid primary key,
  name text
);

create table threads (
  id uuid primary key,
  thread_title text unique not null,
  category_id uuid not null references categories,
  user_id uuid not null references user_profiles
);

create table thre (
  id uuid primary key,
  thread_title text unique not null,
  category_id uuid not null references categories,
  up_id uuid not null references up
);

create table posts (
  id uuid primary key,
  content varchar(1000),
  thread_id uuid not null references threads,
  user_id uuid not null references user_profiles
);

alter table user_profiles enable row level security;

CREATE POLICY "all can see" ON "public"."user_profiles"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "users can insert" ON "public"."user_profiles"
AS PERMISSIVE FOR INSERT
TO public
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "owners can update" ON "public"."user_profiles"
AS PERMISSIVE FOR UPDATE
TO public
USING (auth.uid()=user_id)
WITH CHECK (auth.uid()=user_id);