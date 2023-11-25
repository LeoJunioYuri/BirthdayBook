import axios from 'axios';
import { FBBirthdayResponse } from './birthday.interface';

export class Facebook {
  private accessToken: string;

  constructor() {
    this.accessToken = 'mock';
  }

  async getFriendsWithBirthdays(limit=25,afterCursor=''): Promise<FBBirthdayResponse> {
    try {
      const response = await axios.get(`https://graph.facebook.com/v13.0/me/friends?fields=name,birthday&limit=${limit}&after=${afterCursor}&access_token=${this.accessToken}`);
  
      return response.data as FBBirthdayResponse;
    } catch (error) {
      console.error('Erro ao obter os aniversários dos amigos:', (error as Error).message);
      throw error;
    }
  }
}