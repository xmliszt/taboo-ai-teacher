export default interface IUser {
  uid: string;
  displayName: string;
  photoUrl: string;
  email: string;
  createdAt: string;
  lastLoginAt: string;
  tokens: number; // The count of available tokens the user has, token is used as payment for services
}
