export interface UnitExpr {
  type: "unit";
  name: string;
}

export interface QuoteExpr {
  type: "quote";
  string: string;
}

export interface NumericParts {
  numer: string;
  denom: string;
  exactValue: string | null;
  approxValue: string | null;
}

export interface ConstExpr {
  type: "const";
  value: NumericParts;
}

export interface DateExpr {
  type: "date";
  //tokens: DateToken[];
}

export enum BinOpType {
  Add = "add",
  Sub = "sub",
  Frac = "frac",
  Pow = "pow",
  Equals = "equals",
}

export interface BinOpExpr {
  type: "binop";
  op: BinOpType;
  left: Expr;
  right: Expr;
}

export enum UnaryOpType {
  Negative = "negative",
  Positive = "positive",
  // Degree
}

export interface UnaryOpExpr {
  type: "unaryop";
  op: UnaryOpType;
  expr: Expr;
}

export interface MulExpr {
  type: "mul";
  exprs: Expr[];
}

export interface OfExpr {
  type: "of";
  property: string;
  expr: Expr;
}

export interface CallExpr {
  type: "call";
  func: string;
  args: Expr[];
}

export interface ErrorExpr {
  type: "error";
  message: string;
}

export type Expr =
  | UnitExpr
  | QuoteExpr
  | ConstExpr
  | DateExpr
  | BinOpExpr
  | UnaryOpExpr
  | MulExpr
  | OfExpr
  | CallExpr
  | ErrorExpr;
