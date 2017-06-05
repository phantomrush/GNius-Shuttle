var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      var palaj_shuttle = {
        Monday : {
          times:["8:15","10:00","14:00","16:00","17:15","18:45","20:30"],
          routes:["Palaj - VGEC Gate - Visat Circle", 
              "Palaj - Infocity - VGEC Campus", 
              "Palaj - VGEC Campus", 
              "Palaj - Infocity - Palaj", 
              "Palaj - VGEC Gate - Visat Circle", 
              "Palaj - VGEC Gate - Visat Circle", 
              "Palaj - Infocity - VGEC Campus"
              ]
            },
        Sunday : {
          times:["8:15","10:00","14:00","17:00","19:00","21:30"],
          routes:["Palaj - VGEC Gate - Visat Circle", 
              "Palaj - Infocity - VGEC Campus", 
              "Palaj - VGEC Campus", 
              "Palaj - Infocity - VGEC Gate - Visat Circle", 
              "Palaj - Infocity - VGEC Campus", 
              "Palaj - Infocity - VGEC Campus"
              ]
            }
        
      }
      var chandkheda_shuttle = {
        Monday : {
          times:["7:15","9:00","12:00","15:00","18:00","19:30","22:30"],
          routes:["Visat Circle - VGEC Gate - Infocity - Palaj", 
              "Visat Circle - VGEC Gate - Infocity - Palaj", 
              "VGEC Campus - Infocity - Palaj", 
              "VGEC Campus - Palaj", 
              "Visat Circle - VGEC Gate - Palaj", 
              "Visat Circle - VGEC Gate - Infocity - Palaj", 
              "VGEC Campus - Infocity - Palaj"
              ]
            },
        Sunday : {
          times:["7:15","9:00","12:00","15:00","18:00","20:00","22:30"],
          routes:["Visat Circle - VGEC Gate - Infocity - Palaj", 
              "Visat Circle - VGEC Gate - Infocity - Palaj", 
              "VGEC Campus - Infocity - Palaj", 
              "VGEC Campus - Palaj", 
              "Visat Circle - VGEC Gate - Infocity - Palaj", 
              "Visat Circle - Infocity - Palaj", 
              "VGEC Campus - Infocity - Palaj"
              ]
            }
        
      }

      var div = document.getElementById("time");
      var shuttle_details_div = document.getElementById('shuttle-details');
      var currentDay, currentHour, currentMinutes;
      var next_time;
      var shuttle;
      document.getElementById('palaj').addEventListener('click',palaj);
      document.getElementById('chandkheda').addEventListener('click',chandkheda);

      palaj();

      function update(place)
      {
        if (currentMinutes < 10)
        {
          div.innerHTML = "Current time: " + currentDay + " " + currentHour + ":0" + currentMinutes + "<br>";
        }
        else
        {
          div.innerHTML = "Current time: " + currentDay + " " + currentHour + ":" + currentMinutes + "<br>";
        }
        
        for (var i = 0; i < shuttle.times.length; i++)
        {
          var time = shuttle.times[i];
          var s = '';
          var ender = 0;
          for (var j = 0; j < time.length; j++)
          {
            if (time[j] != ':')
            {
              s = s + time[j]
            }
            else
            {
              if (parseInt(s) > currentHour)
              {
                next_time = time;
                ender = 1;
                break;
              }
            }
          } 
          if (ender == 1)
          {
            break;
          }
        }
        if (next_time != '')
        {
          shuttle_details_div.innerHTML = "<div id='title'> Next shuttle details </div> <div id='place'><b>FROM " + place + "</b></div>" + shuttle.times[i] + "<br>" + shuttle.routes[i];
        }
        else
        {
          shuttle_details_div.innerHTML = "<div id='place'><b> FROM " + place + " </b></div>" + "No more shuttles available :(";
        }

      }

      function palaj()
      {
        date = new Date();
        currentDay = days[date.getDay()];
        currentHour = date.getHours();
        currentMinutes = date.getMinutes();
        next_time = '';
        

        if (currentDay == 'Sunday')
        {
          shuttle = palaj_shuttle.Sunday;
        }
        else
        {
          shuttle = palaj_shuttle.Monday;
        }

        if (document.getElementsByClassName('active-button').length > 0)
        {
          document.getElementsByClassName('active-button')[0].className = '';
          document.getElementById('palaj').className = 'active-button';
        }
        else
        {
          document.getElementById('palaj').className = 'active-button';
        }

        update('PALAJ');
        
      }

      function chandkheda()
      {
        date = new Date();
        currentDay = days[date.getDay()];
        currentHour = date.getHours();
        currentMinutes = date.getMinutes();       
        next_time = '';
        
        if (currentDay == 'Sunday')
        {
          shuttle = chandkheda_shuttle.Sunday;
        }
        else
        {
          shuttle = chandkheda_shuttle.Monday;
        }
        if (document.getElementsByClassName('active-button').length > 0)
        {
          document.getElementsByClassName('active-button')[0].className = '';
          document.getElementById('chandkheda').className = 'active-button';
        }
        else
        {
          document.getElementById('chandkheda').className = 'active-button';
        }
        update('CHANDKHEDA');
      }