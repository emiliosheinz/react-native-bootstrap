import api from '../api'

class ExampleApiService {
  async getAll() {
    const examples = await api.get('/examples')

    // Here you can do something with the incoming data

    return examples
  }
}

export default new ExampleApiService()
