import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/pokemon-responce.interface';


@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios;


  async executedSeed() {
    
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10');

    data.results.forEach(({ name, url }) => {
      // -2 para obtner la ultima pósicion
      const segments = url.split('/');
      // + para que de string sea number
      const no = +segments[ segments.length - 2 ];
      console.log(name)
      console.log(no)

    })
    
    return data.results;
  }

}
