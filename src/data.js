const data = {
    unitTypes: {
        Length: {
            Meter: {

            },
            Kilometer: {

            },
            Centimeter: {

            },
            Millimeter: {

            },
            Mile: {

            },
            Yard: {

            },
            Foot: {

            },
            Inch: {

            },
            LightYear: {

            }
        },
        Mass: {
            Gram: {

            },
            Kilogram: {

            },
            Milligram: {

            },
            Ounce: {

            },
            Pound: {

            },
            USTon: {
                
            }
        },
        Volume: {

        },
        Time: {
            Millisecond: { // only "exact convert", all others are from google convert'
                Second: ['/', 1000], 
                Minute: ['/', 60000], 
                Hour: ['/', 3600000],
                Day: ['/', 86400000],
                Week: ['/', 604800000],
                Month: ['/', 2628001150],
                Year: ['/', 31536086400] 
            },
            Second: {
                Millisecond: ['x', 1000],
                Minute: ['/', 60],
                Hour: ['/', 3600],
                Day: ['/', 86400],
                Week: ['/', 604800],
                Month: ['/', 2628000],
                Year: ['/', 31540000]
            },
            Minute: {
                Millisecond: ['x', 60000],
                Second: ['x', 60],
                Hour: ['/', 60],
                Day: ['/', 1440],
                Week: ['/', 10080],
                Month: ['/', 43800],
                Year: ['/', 525600]
            },
            Hour: {
                Millisecond: ['x', 3600000],
                Second: ['x', 3600],
                Minute: ['x', 60],
                Day: ['/', 24],
                Week: ['/', 168],
                Month: ['/', 730],
                Year: ['/', 8760]
            },
            Day: {
                Millisecond: ['x', 86400000],
                Second: ['x', 86400],
                Minute: ['x', 1440],
                Hour: ['x', 24],
                Week: ['/', 7],
                Month: ['/', 30.417],
                Year: ['/', 365]
            },
            Week: {
                Millisecond: ['x', 604800000],
                Second: ['x', 604800],
                Minute: ['x', ],
                Hour: ['x', ],
                Day: ['x', ],
                Month: ['/', ],
                Year: ['/', ]
            },
            Month: {
                Millisecond: [],
                Second: [],
                Minute: [],
                Hour: [],
                Day: [],
                Week: [],
                Year: []
            },
            Year: {
                Millisecond: [],
                Second: [],
                Minute: [],
                Hour: [],
                Day: [],
                Week: [],
                Month: []
            }
        },
        Temp: {
            Celsius: {

            },
            Kelvin: {

            },
            Fahrenheit: {

            }
        }
    }
}

// const data = {
  
// }

export default data;