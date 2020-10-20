export class SignUpInfo {
  name: string;
  username: string;
  role: string[];
  password: string;

  constructor(name: string, username: string, password: string) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.role = ['user'];
  }
}
