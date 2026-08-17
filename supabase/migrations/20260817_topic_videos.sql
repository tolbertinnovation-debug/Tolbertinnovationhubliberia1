-- Cache for resolve-video edge function
create table if not exists public.topic_videos (
  topic_id   text primary key,
  video_id   text not null,
  title      text,
  course_id  text,
  query      text,
  updated_at timestamptz not null default now()
);

create index if not exists topic_videos_course_id_idx
  on public.topic_videos (course_id);

alter table public.topic_videos enable row level security;

create policy "topic_videos_select_public"
  on public.topic_videos for select
  using (true);
