import axios from 'axios';

export async function character_search(searchInput) {
    // Remember that this works because we added the reverse "proxy" in package.json
    try {
        let search_character = await axios.get("/search/" + searchInput)
        if (search_character === 200) {
            return search_character.data
        }

    } catch (err) {
        if (err.response.status >= 400) {
            return 'Error 400 something!'
        }
    }
}
