export class GetInfoCharactersDm {

    async getApi(page) {
      
      const data = await this.makeRequest('GET', `https://rickandmortyapi.com/api/character/?page=${page}`);
      const mappedData = this.mapper(data.results);
     const infoApi={
        results:this.sortName(mappedData),
        info:data.info
      }
      console.log(infoApi);
      return infoApi;
    }
  
    //  mapear la información que se necesita como una interfaz solo los datos que necesito
    mapper(results) {
        
      return results.map(character => ({
        image: character.image,
        name: character.name,
        species: character.species,
        status: character.status,
        location: character.location.name,
        gender: character.gender,
        created:character.created,
        episode:character.episode,
        origin:character.origin.name
      }));
    }

    sortName(data) {
      return data.sort((a, b) => a.name.localeCompare(b.name)); //se utiliza para comparar dos cadenas de texto
    }
  
    // varbos y opciones
    async makeRequest(type, url) {
      try {
        const options = {
          method: type,
        };
        const response = await fetch(url, options);
        return await response.json();
      } catch (error) {
        return error;
      }
    }
  }
  

