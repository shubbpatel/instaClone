
async function getCities(db) {
        const citiesCol = collection(db, 'posts');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        return console.log(cityList);
      };

      export default getCities;