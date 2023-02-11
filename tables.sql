table users {
  id uuid[pk]
  first_name varchar [not null]
  last_name varchar [not null]
  email varchar [not null]
  password varchar [not null]
  profile_image varchar
  is_active bool [default: true]
  phone varchar [not null]
}

table conversations {
  id uuid[pk]
  profile_image varchar
  name varchar
  created_by uuid
  is_group bool [default: true]
}

table participants {
  id uuid[pk]
  user_id uuid [not null]
  conversation_id uuid [not null]
  is_admin bool [default: false]
}

table messages {
  id uuid [pk]
  content text [not null]
  participants_id uuid [not null]
  created_by uuid
  status varchar [default: 'sent']  
}

Ref: "users"."id" < "participants"."user_id"

Ref: "participants"."conversation_id" > "conversations"."id"

Ref: "messages"."participants_id" > "participants"."id"