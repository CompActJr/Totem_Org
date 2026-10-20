import bcrypt from 'bcrypt'

export class PasswordService {
  constructor(
    private readonly saltRounds: number = 12
  ) {}

  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async compare(password: string, passwordHash: string): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }
}
