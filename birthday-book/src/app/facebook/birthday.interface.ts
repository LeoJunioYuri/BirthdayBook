export interface FBBirthdayResponse {
  data: Array<{
    name: string;
    id: string;
    birthday: string;
  }>;
  paging: {
    cursors: {
      before: string;
      after: string;
    }
  },
  next: string;
}