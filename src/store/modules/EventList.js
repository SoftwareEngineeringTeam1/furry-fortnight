const state = {
  EventList: [
    {
      Id: 1,
      Name: "Movie Night: GOT",
      User: "SPC",
      Organization: "SPC",
      Category: "Club",
      Coordinates: [-80.372883, 25.756720],
      Location: "GC",
      Attending: 1,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-12-08",
      Comment: "NOT SEASON 8!!!",
      // Color: '#a8eb34'
      Color: '#CC0000'
    },
    { 
      Id: 2,
      Name: "Pizza Night",
      User: "gagos007",
      Organization: "Student",
      Category: "Study Group",
      Coordinates: [-80.373875, 25.759039],
      Location: "ECS",
      Attending: 2,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-12-08",
      Comment: "COME THRU",
      // Color: '#ebe134'
      Color: '#CC0000'
    },
    // {
    //   Id: 3,
    //   Name: "The best Study group!",
    //   User: "gagos007",
    //   Organization: "UPE",
    //   Category: "Club",
    //   Coordinates: [-80.372883, 25.756720],
    //   Location: "GC",
    //   Attending: 4,
    //   Capacity: 50,
    //   StartTime: "09:00:00",
    //   EndTime: "13:30:00",
    //   Date: "2019-12-06",
    //   Comment: "We will be here all night.",
    //   Color: '#eb9834'
    // },
    // {
    //   Id: 4,
    //   Name: "Study Club",
    //   User: "gagos007",
    //   Organization: "SPC",
    //   Category: "Club",
    //   Coordinates: [-80.372883, 25.756720],
    //   Location: "GC",
    //   Attending: 5,
    //   Capacity: 50,
    //   StartTime: "12:00:00",
    //   EndTime: "13:30:00",
    //   Date: "2019-12-06",
    //   Comment: "Second floor room 201",
    //   Color: '#eb9834'
    // },
    // {
    //   Id: 5,
    //   Name: "Engineers corner",
    //   User: "gagos007",
    //   Organization: "SPC",
    //   Category: "Study Group",
    //   Coordinates: [-80.373875, 25.759039],
    //   Location: "ECS",
    //   Attending: 10,
    //   Capacity: 50,
    //   StartTime: "09:00",
    //   EndTime: "13:30",
    //   Date: "2019-12-06",
    //   Comment: "Near the office by the back room.",
    //   Color: '#eb4034'
    // },
    // {
    //   Id: 6,
    //   Name: "Beginer sessions",
    //   User: "gagos007",
    //   Organization: "SPC",
    //   Category: "Club",
    //   Coordinates: [-80.376131, 25.757444],
    //   Location: "Ryder Business",
    //   Attending: 8,
    //   Capacity: 50,
    //   StartTime: "09:00:00",
    //   EndTime: "13:30:00",
    //   Date: "2019-12-06",
    //   Comment: "Near the top flooooor!!!!!!",
    //   Color: '#eb4034'
    // },
    // { 
    //   Id: 7,
    //   Name: "Quantum Physics Notes",
    //   User: "gagos007",
    //   Organization: "UPE",
    //   Category: "Club",
    //   Coordinates: [-80.372234, 25.758340],
    //   Location: "Chem & Phy Building",
    //   Attending: 1,
    //   Capacity: 50,
    //   StartTime: "09:00:00",
    //   EndTime: "13:30:00",
    //   Date: "2019-12-06",
    //   Comment: "I hate studying in this building but I have to do it.",
    //   Color: '#a8eb34'
    // },
    // {
    //   Id: 8,
    //   Name: "Classical Physics group",
    //   User: "gagos007",
    //   Organization: "UPE",
    //   Category: "Club",
    //   Coordinates: [-80.372234, 25.758340],
    //   Location: "Chem & Phy Building",
    //   Attending: 8,
    //   Capacity: 50,
    //   StartTime: "09:00:00",
    //   EndTime: "13:30:00",
    //   Date: "2019-12-06",
    //   Comment: "Lecture room.",
    //   Color: '#eb4034'
    // },
    // {
    //   Id: 9,
    //   Name: "Quantum Computation Advanced Study",
    //   User: "gagos007",
    //   Organization: "SPC",
    //   Category: "Club",
    //   Coordinates: [-80.372234, 25.758340],
    //   Location: "Chem & Phy Building",
    //   Attending: 8,
    //   Capacity: 50,
    //   StartTime: "12:00:00",
    //   EndTime: "13:30:00",
    //   Date: "2019-12-06",
    //   Comment: "Here we go!!!!!!!!",
    //   Color: '#eb4034'
    // },
    // {
    //   Id: 10,
    //   Name: "SPC Orientation",
    //   User: "gagos007",
    //   Organization: "SPC",
    //   Category: "Study Group",
    //   Coordinates: [-80.371388, 25.757660],
    //   Location: "AHC1",
    //   Capacity: 50,
    //   StartTime: "09:00",
    //   EndTime: "13:30",
    //   Date: "2019-12-06",
    //   Comment: "We will be on the third floor room 302.",
    //   Color: '#CC0000'
    // },
    // {
    //   Id: 11,
    //   Name: "SPC Orientation",
    //   User: "gagos007",
    //   Organization: "SPC",
    //   Category: "Club",
    //   Coordinates: [-80.371388, 25.757660],
    //   Location: "AHC1",
    //   Attending: 5,
    //   Capacity: 50,
    //   StartTime: "09:00:00",
    //   EndTime: "13:30:00",
    //   Date: "2019-12-06",
    //   Comment: "Please come so we can study together....",
    //   Color: '#CC0000'
    // },
    // {
    //   Id: 12,
    //   Name: "SPC Orientation",
    //   User: "gagos007",
    //   Organization: "UPE",
    //   Category: "Club",
    //   Coordinates: [-80.373867, 25.757200],
    //   Location: "S&D Green Library",
    //   Attending: 49,
    //   Capacity: 50,
    //   StartTime: "09:00:00",
    //   EndTime: "13:30:00",
    //   Date: "2019-12-06",
    //   Comment: "Lets sit by the windows rto get better lighting.",
    //   Color: '#CC0000'
    // },
    {
      Id: 13,
      Name: "Writing Tutoring",
      User: "Honors College",
      Organization: "Honors College",
      Category: "Tutor",
      Coordinates: [-80.373867, 25.757200],
      Location: "GL",
      Attending: 0,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-12-08",
      Comment: "Tutoring Available for Writing",
      Color: '#CC0000'
    },
    {
      Id: 14,
      Name: "CEN5011 : Fun!!!",
      User: "Monique Ross",
      Organization: "WiCS",
      Category: "Club",
      Coordinates: [-80.373867, 25.757200],
      Location: "GL",
      Attending: 25,
      Capacity: 50,
      StartTime: "12:00:00",
      EndTime: "13:30:00",
      Date: "2019-12-08",
      Comment: "Best Ever!",
      // Color: '#a8eb34'
      Color: '#CC0000'
    },
    { 
      Id: 15,
      Name: "SPC Orientation",
      User: "SPC",
      Organization: "SPC",
      Category: "Club",
      Coordinates: [-80.376095, 25.756512],
      Location: "SIPA",
      Capacity: 50,
      Attending: 1,
      StartTime: "09:00",
      EndTime: "13:30",
      Date: "2019-12-09",
      Comment: "We are always looking for people to join.",
      // Color: '#a8eb34'
      Color: '#CC0000'
    }
  ]
};

const getters = {
  EventList: state => state.EventList,
};

const actions = {
  updateEventList({ commit }) {
    commit("updateEventList");
  },
  printDataList: () => {
    console.log(JSON.parse(JSON.stringify(state.EventList[1])));
  }
};

const mutations = {
  updateEventList: (state, EventList) => (state.EventList = EventList),
  pushEventList: (state, data) => {
    state.EventList.push(data);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
