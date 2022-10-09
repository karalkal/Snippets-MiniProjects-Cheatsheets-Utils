const today = new Date(new Date().getTime());
    let currentDay = today

    for (let i = 0; i < 12; i++) {
        currentDay.setDate(today.getDate() - 1);

        const year = currentDay.getFullYear()
        const month = (currentDay.getMonth() + 1)
            .toString()
            .padStart(2, '0')
        const day = currentDay.getDate()
            .toString()
            .padStart(2, '0')
