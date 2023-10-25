interface IUserController {
  login(data: any): any;
  signUp(data: any): any;
}

export class UserController implements IUserController {
  login(data: any) {}

  signUp(data: any) {}
}
