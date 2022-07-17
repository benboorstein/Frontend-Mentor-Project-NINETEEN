const App = {
    data() {
        return {
            mappings: [
                {
                    pageviews: 25,
                    monthlyPrice: 2.00
                },
                {
                    pageviews: 40,
                    monthlyPrice: 7.00
                },
                {
                    pageviews: 55,
                    monthlyPrice: 11.50
                },
                {
                    pageviews: 70,
                    monthlyPrice: 15.50
                },
                {
                    pageviews: 85,
                    monthlyPrice: 19.00
                },
                {
                    pageviews: 100,
                    monthlyPrice: 22.00
                },
                {
                    pageviews: 115,
                    monthlyPrice: 24.50
                },
                {
                    pageviews: 130,
                    monthlyPrice: 26.50
                },
                {
                    pageviews: 145,
                    monthlyPrice: 28.00
                },
                {
                    pageviews: 160,
                    monthlyPrice: 29.00
                },
                {
                    pageviews: 175,
                    monthlyPrice: 29.50
                }
            ],
            slider: '5',
            toggle: false
        }
    },
    computed: {
        price() {
            return this.toggle ? (this.selected.monthlyPrice * 12 * .75).toFixed(2) : (this.selected.monthlyPrice).toFixed(2)
        },
        subscriptionPeriod() {
            return this.toggle ? 'year' : 'month'
        },
        selected() {
            return this.mappings[+this.slider]
        }
    }
}

Vue.createApp(App).mount('#app')