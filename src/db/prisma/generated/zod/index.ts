import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','email']);

export const RelationLoadStrategySchema = z.enum(['query','join']);

export const PlaylistScalarFieldEnumSchema = z.enum(['id','name','userId','createdAt','modifiedAt']);

export const VideoScalarFieldEnumSchema = z.enum(['id','videoId','title','seq','playlistId','createdAt','modifiedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const UserPartialSchema = UserSchema.partial()

export type UserPartial = z.infer<typeof UserPartialSchema>

// USER OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const UserOptionalDefaultsSchema = UserSchema.merge(z.object({
  id: z.string().uuid().optional(),
}))

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>

// USER RELATION SCHEMA
//------------------------------------------------------

export type UserRelations = {
  playlist: PlaylistWithRelations[];
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  playlist: z.lazy(() => PlaylistWithRelationsSchema).array(),
}))

// USER OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type UserOptionalDefaultsRelations = {
  playlist: PlaylistOptionalDefaultsWithRelations[];
};

export type UserOptionalDefaultsWithRelations = z.infer<typeof UserOptionalDefaultsSchema> & UserOptionalDefaultsRelations

export const UserOptionalDefaultsWithRelationsSchema: z.ZodType<UserOptionalDefaultsWithRelations> = UserOptionalDefaultsSchema.merge(z.object({
  playlist: z.lazy(() => PlaylistOptionalDefaultsWithRelationsSchema).array(),
}))

// USER PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type UserPartialRelations = {
  playlist?: PlaylistPartialWithRelations[];
};

export type UserPartialWithRelations = z.infer<typeof UserPartialSchema> & UserPartialRelations

export const UserPartialWithRelationsSchema: z.ZodType<UserPartialWithRelations> = UserPartialSchema.merge(z.object({
  playlist: z.lazy(() => PlaylistPartialWithRelationsSchema).array(),
})).partial()

export type UserOptionalDefaultsWithPartialRelations = z.infer<typeof UserOptionalDefaultsSchema> & UserPartialRelations

export const UserOptionalDefaultsWithPartialRelationsSchema: z.ZodType<UserOptionalDefaultsWithPartialRelations> = UserOptionalDefaultsSchema.merge(z.object({
  playlist: z.lazy(() => PlaylistPartialWithRelationsSchema).array(),
}).partial())

export type UserWithPartialRelations = z.infer<typeof UserSchema> & UserPartialRelations

export const UserWithPartialRelationsSchema: z.ZodType<UserWithPartialRelations> = UserSchema.merge(z.object({
  playlist: z.lazy(() => PlaylistPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// PLAYLIST SCHEMA
/////////////////////////////////////////

export const PlaylistSchema = z.object({
  id: z.number().int(),
  name: z.string({ invalid_type_error: "文字を入力してください"}).min(1, { message: "必須です" }).max(10, { message: "10文字以内です" }),
  userId: z.string(),
  createdAt: z.coerce.date(),
  modifiedAt: z.coerce.date(),
})

export type Playlist = z.infer<typeof PlaylistSchema>

/////////////////////////////////////////
// PLAYLIST PARTIAL SCHEMA
/////////////////////////////////////////

export const PlaylistPartialSchema = PlaylistSchema.partial()

export type PlaylistPartial = z.infer<typeof PlaylistPartialSchema>

// PLAYLIST OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const PlaylistOptionalDefaultsSchema = PlaylistSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  modifiedAt: z.coerce.date().optional(),
}))

export type PlaylistOptionalDefaults = z.infer<typeof PlaylistOptionalDefaultsSchema>

// PLAYLIST RELATION SCHEMA
//------------------------------------------------------

export type PlaylistRelations = {
  video: VideoWithRelations[];
  user: UserWithRelations;
};

export type PlaylistWithRelations = z.infer<typeof PlaylistSchema> & PlaylistRelations

export const PlaylistWithRelationsSchema: z.ZodType<PlaylistWithRelations> = PlaylistSchema.merge(z.object({
  video: z.lazy(() => VideoWithRelationsSchema).array(),
  user: z.lazy(() => UserWithRelationsSchema),
}))

// PLAYLIST OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type PlaylistOptionalDefaultsRelations = {
  video: VideoOptionalDefaultsWithRelations[];
  user: UserOptionalDefaultsWithRelations;
};

export type PlaylistOptionalDefaultsWithRelations = z.infer<typeof PlaylistOptionalDefaultsSchema> & PlaylistOptionalDefaultsRelations

export const PlaylistOptionalDefaultsWithRelationsSchema: z.ZodType<PlaylistOptionalDefaultsWithRelations> = PlaylistOptionalDefaultsSchema.merge(z.object({
  video: z.lazy(() => VideoOptionalDefaultsWithRelationsSchema).array(),
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
}))

// PLAYLIST PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type PlaylistPartialRelations = {
  video?: VideoPartialWithRelations[];
  user?: UserPartialWithRelations;
};

export type PlaylistPartialWithRelations = z.infer<typeof PlaylistPartialSchema> & PlaylistPartialRelations

export const PlaylistPartialWithRelationsSchema: z.ZodType<PlaylistPartialWithRelations> = PlaylistPartialSchema.merge(z.object({
  video: z.lazy(() => VideoPartialWithRelationsSchema).array(),
  user: z.lazy(() => UserPartialWithRelationsSchema),
})).partial()

export type PlaylistOptionalDefaultsWithPartialRelations = z.infer<typeof PlaylistOptionalDefaultsSchema> & PlaylistPartialRelations

export const PlaylistOptionalDefaultsWithPartialRelationsSchema: z.ZodType<PlaylistOptionalDefaultsWithPartialRelations> = PlaylistOptionalDefaultsSchema.merge(z.object({
  video: z.lazy(() => VideoPartialWithRelationsSchema).array(),
  user: z.lazy(() => UserPartialWithRelationsSchema),
}).partial())

export type PlaylistWithPartialRelations = z.infer<typeof PlaylistSchema> & PlaylistPartialRelations

export const PlaylistWithPartialRelationsSchema: z.ZodType<PlaylistWithPartialRelations> = PlaylistSchema.merge(z.object({
  video: z.lazy(() => VideoPartialWithRelationsSchema).array(),
  user: z.lazy(() => UserPartialWithRelationsSchema),
}).partial())

/////////////////////////////////////////
// VIDEO SCHEMA
/////////////////////////////////////////

export const VideoSchema = z.object({
  id: z.number().int(),
  videoId: z.string({ invalid_type_error: "文字を入力してください"}).min(1, { message: "必須です" }),
  title: z.string({ invalid_type_error: "文字を入力してください"}).min(1, { message: "必須です" }),
  seq: z.number().int(),
  playlistId: z.number().int(),
  createdAt: z.coerce.date(),
  modifiedAt: z.coerce.date(),
})

export type Video = z.infer<typeof VideoSchema>

/////////////////////////////////////////
// VIDEO PARTIAL SCHEMA
/////////////////////////////////////////

export const VideoPartialSchema = VideoSchema.partial()

export type VideoPartial = z.infer<typeof VideoPartialSchema>

// VIDEO OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const VideoOptionalDefaultsSchema = VideoSchema.merge(z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  modifiedAt: z.coerce.date().optional(),
}))

export type VideoOptionalDefaults = z.infer<typeof VideoOptionalDefaultsSchema>

// VIDEO RELATION SCHEMA
//------------------------------------------------------

export type VideoRelations = {
  playlist: PlaylistWithRelations;
};

export type VideoWithRelations = z.infer<typeof VideoSchema> & VideoRelations

export const VideoWithRelationsSchema: z.ZodType<VideoWithRelations> = VideoSchema.merge(z.object({
  playlist: z.lazy(() => PlaylistWithRelationsSchema),
}))

// VIDEO OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type VideoOptionalDefaultsRelations = {
  playlist: PlaylistOptionalDefaultsWithRelations;
};

export type VideoOptionalDefaultsWithRelations = z.infer<typeof VideoOptionalDefaultsSchema> & VideoOptionalDefaultsRelations

export const VideoOptionalDefaultsWithRelationsSchema: z.ZodType<VideoOptionalDefaultsWithRelations> = VideoOptionalDefaultsSchema.merge(z.object({
  playlist: z.lazy(() => PlaylistOptionalDefaultsWithRelationsSchema),
}))

// VIDEO PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type VideoPartialRelations = {
  playlist?: PlaylistPartialWithRelations;
};

export type VideoPartialWithRelations = z.infer<typeof VideoPartialSchema> & VideoPartialRelations

export const VideoPartialWithRelationsSchema: z.ZodType<VideoPartialWithRelations> = VideoPartialSchema.merge(z.object({
  playlist: z.lazy(() => PlaylistPartialWithRelationsSchema),
})).partial()

export type VideoOptionalDefaultsWithPartialRelations = z.infer<typeof VideoOptionalDefaultsSchema> & VideoPartialRelations

export const VideoOptionalDefaultsWithPartialRelationsSchema: z.ZodType<VideoOptionalDefaultsWithPartialRelations> = VideoOptionalDefaultsSchema.merge(z.object({
  playlist: z.lazy(() => PlaylistPartialWithRelationsSchema),
}).partial())

export type VideoWithPartialRelations = z.infer<typeof VideoSchema> & VideoPartialRelations

export const VideoWithPartialRelationsSchema: z.ZodType<VideoWithPartialRelations> = VideoSchema.merge(z.object({
  playlist: z.lazy(() => PlaylistPartialWithRelationsSchema),
}).partial())
