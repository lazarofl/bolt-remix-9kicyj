import type { EmailTemplate } from '~/types/email';

export class EmailService {
  private static instance: EmailService;

  private constructor() {}

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  async sendEmail(template: EmailTemplate): Promise<boolean> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    console.log('Sending email:', {
      to: template.to,
      subject: template.subject,
      template: template.name,
      data: template.data,
    });

    // Simulate 95% success rate
    return Math.random() > 0.05;
  }

  async sendContactConfirmation(to: string, name: string): Promise<boolean> {
    return this.sendEmail({
      to,
      subject: 'Thanks for contacting Squadds',
      name: 'contact-confirmation',
      data: {
        name,
        supportEmail: 'support@squadds.co',
      },
    });
  }

  async sendLoginLink(to: string): Promise<boolean> {
    return this.sendEmail({
      to,
      subject: 'Login to Squadds',
      name: 'magic-link',
      data: {
        loginUrl: `https://app.squadds.co/verify-login?token=${Buffer.from(to).toString('base64')}`,
        expiresIn: '10 minutes',
      },
    });
  }

  async sendPasswordReset(to: string): Promise<boolean> {
    return this.sendEmail({
      to,
      subject: 'Reset your Squadds password',
      name: 'password-reset',
      data: {
        resetUrl: `https://app.squadds.co/reset-password?token=${Buffer.from(to).toString('base64')}`,
        expiresIn: '1 hour',
      },
    });
  }

  async sendWelcome(to: string, name: string): Promise<boolean> {
    return this.sendEmail({
      to,
      subject: 'Welcome to Squadds!',
      name: 'welcome',
      data: {
        name,
        loginUrl: 'https://app.squadds.co/login',
        docsUrl: 'https://docs.squadds.co',
      },
    });
  }
}