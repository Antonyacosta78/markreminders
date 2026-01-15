export enum MarkerType {
  URL = "url",
  IMAGE = "image",
  OTHER = "other"
}

export type MarkerDTO = {
  id: string;
  updatedAt: Date;
  createdAt: Date;
  deletedAt?: Date;
  remindAt: Date;
  comment: string;
  type: MarkerType;
  tags: string[];
}

