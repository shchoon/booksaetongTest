export interface PlaceHolder {
  isbn: string;
  title: string;
  contents: string;
  thumbnail: string;
}

export type bookInfo = {
  authors: string[],
  contents: string,
  publisher: string,
  title: string,
  translators: string[],
  url: string,
  isbn: string,
  thumbnail: string
}
