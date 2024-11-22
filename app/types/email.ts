export interface EmailTemplate {
  to: string;
  subject: string;
  name: string;
  data: Record<string, unknown>;
}