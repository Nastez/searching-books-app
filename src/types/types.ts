export type BooksDataType = {
    cover_i: number,
    has_fulltext: boolean,
    edition_count: number,
    title: string,
    author_name: Array<string>,
    first_publish_year: number,
    key: string,
    ia: Array<string>,
    author_key: Array<string>,
    public_scan_b: boolean,
    isbn: Array<string> | null,
}