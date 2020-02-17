interface Weakness {
  weakness: string[];
}

interface Pokemon {
  name: string;
  type: string;
  number: string;
  weight: string;
  height: string;
  evolution: string;
  weaknesses: Weakness;
  image: string;
}

export default Pokemon;
