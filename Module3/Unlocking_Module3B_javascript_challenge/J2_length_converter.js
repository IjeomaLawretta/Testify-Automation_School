function lengthConverter (meter) {
        const cm = meter/0.01
        return cm;
    }

    const cmValue = lengthConverter(10000)

    console.log(cmValue)