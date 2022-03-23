const getCounter = async (setPacks, setMock) => {
    const mockArr = [];
    const response = await fetch('http://localhost:3004/packs').then((response) => response.json())
      .then((data) => {
        setPacks(data[0].packs)
        for (let i = 0; i < data[0].packs; i++) {
            mockArr.push(i);
        }
        setMock(mockArr);
    })
    await response;
}

export default getCounter;
