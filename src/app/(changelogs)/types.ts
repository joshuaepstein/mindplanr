type Changelog = {
  title: string;
  versionTitle: string;
  description: string;
  tags: Tag[];
  date: Date | string;
};

type Colour =
  | `#${string}`
  | {
      r: number;
      g: number;
      b: number;
      a?: number;
    }
  | {
      h: number;
      s: number;
      l: number;
      a?: number;
    };

type Tag = {
  colour: Colour;
  name: string;
};
