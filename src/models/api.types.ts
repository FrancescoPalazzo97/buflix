// src/app/shared/models/tmdb.model.ts

/**
 * Tipo di media: film o serie TV
 */
export type MediaType = 'movie' | 'tv';

/**
 * Lingua originale del contenuto
 */
export type Language = 'en' | 'ko' | 'zh' | 'ja' | 'it' | string;

/**
 * Paese di origine
 */
export type CountryCode = 'US' | 'KR' | 'CN' | 'JP' | 'IT' | string;

/**
 * Item base condiviso tra movie e tv
 */
type BaseMediaItem = {
    adult: boolean;
    backdrop_path: string | null;
    id: number;
    original_language: Language;
    overview: string;
    poster_path: string | null;
    media_type: MediaType;
    genre_ids: number[];
    popularity: number;
    vote_average: number;
    vote_count: number;
}

/**
 * Item di tipo Movie
 */
export type MovieItem = BaseMediaItem & {
    media_type: 'movie';
    title: string;
    original_title: string;
    release_date: string;
    video: boolean;
}

/**
 * Item di tipo TV Show
 */
export type TvItem = BaseMediaItem & {
    media_type: 'tv';
    name: string;
    original_name: string;
    first_air_date: string;
    origin_country: CountryCode[];
}

/**
 * Union type per rappresentare un qualsiasi item (movie o tv)
 */
export type MediaItem = MovieItem | TvItem;

/**
 * Response paginata da TMDB API
 */
export type TmdbResponse = {
    page: number;
    results: MediaItem[];
    total_pages: number;
    total_results: number;
}

/**
 * Response generica paginata (riutilizzabile)
 */
export type PaginatedResponse<T> = {
    page: number;
    results: T[];
    total_pages: number;
    total_results: number;
}

// Puoi anche usare così:
// export type TmdbResponse = PaginatedResponse<MediaItem>;