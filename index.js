const expres = require('express')
const app = expres()
const PORT = 5000
const cors = require('cors')

app.use(cors())

const goldenBoot = {
          '2023':{

                'playerName':    'Erling Haaland',
                 'goals': '36 goals',
                 'playerTeam':'Manchester City'   
          },
          '2022':{

                    'playerName':    'Mohamed Salah, Heung min Son',
                    'goals':'23 goals',
                     'playerTeam':'Liverpool, Tottenham Hotspur'   
          },
          '2021':{

                    'playerName':    'Harry Kane',
                    'goals': '23 goals',
                     'playerTeam':'Tottenham Hotspur'   
          },'2020':{

                    'playerName':    'Jamie Vardy',
                    'goals': '23 goals',
                     'playerTeam':'Leicester City'   
          },
          '404':{

                    'playerName':    'Unknown',
                     'playerTeam':'Unknown'   
              }

}

app.get('/', (request, response)=>{
          response.sendFile(__dirname + "/index.html")
})

app.get('/api/:yearNum',(request, response)=>{
          const yearsNum = request.params.yearNum
          //console.log(request.params.yearNum)
          if ( goldenBoot[yearsNum] ){
          response.json(goldenBoot[yearsNum])
          }else{
          response.json(goldenBoot['404'])
          }
})

app.listen(process.env.PORT || PORT , ()=>{
     console.log(`The server is running on port ${PORT} better go and catch it!`)
})