import React, {useState} from 'react';
import { StyleSheet, Text, View,ImageBackground ,Alert} from 'react-native';
import {Container,Body,Content,Header,Left,Button,
  Icon,
  Title,} from 'native-base';
import Timeline from 'react-native-timeline-flatlist';
import Home from './Home';

function Timeline1(props){
  var [event1, setEvent1] = useState(true);
  const [event2, setEvent2] = useState(true);
  const [event3, setEvent3] = useState(true);
  const [event4, setEvent4] = useState(true);
  const [event5, setEvent5] = useState(true);

  function updateDesc(event){
  if(event.title === 'Event 1'){
    setEvent1(!event1);
  }
  if(event.title === 'Event 2')
    setEvent2(!event2);
  if(event.title === 'Event 3')
    setEvent3(!event3);
  if(event.title === 'Event 4')
    setEvent4(!event4);
  if(event.title === 'Event 5')
    setEvent5(!event5);
  // console.log(event1);
  }

    data1 = [
        {time: '09:00-10:20', title: 'Event 1', description: 'Event 1 Description',lineColor:'#009688',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg',
        description: 'The Beginner Archery and Beginner Crossbow course does not require',},
        {time: '10:45-11:00', title: 'Event 2', description: 'Event 2 Description',lineColor:'#009688',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg',
        description: 'The Beginner Archery and Beginner Crossbow course does not require',},
        {time: '12:00-15:00', title: 'Event 3', description: 'Event 3 Description',lineColor:'#009688',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg',
        description: 'The Beginner Archery and Beginner Crossbow course does not require',},
        {time: '10:00-13:00', title: 'Event 4', description: 'Event 4 Description',lineColor:'#009688',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg',
        description: 'The Beginner Archery and Beginner Crossbow course does not require',},
        {time: '14:30-16:30', title: 'Event 5', description: 'Event 5 Description',lineColor:'#009688',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg',
        description: 'The Beginner Archery and Beginner Crossbow course does not require',},
        {time: '16:30-End', title: 'Event 6',lineColor:'#009688',
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg',
        // description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment. ',
      }
      


      ]

      function renderTime(rowData){
        // let time=<Text style={styles.datestyle1}>{rowData.time} am</Text>
        let time=null;
        let date=null;
        if(rowData.title === 'Event 1'){
        date=<View>
        <Text style={styles.datestyle1}>27</Text>
        <Text style={styles.datestyle2}>Sept</Text>
      </View>;
        }
        if(rowData.title === 'Event 6'){
          date=<View>
          <Text style={styles.datestyle1}>29</Text>
          <Text style={styles.datestyle2}>Sept</Text>
        </View>;
          }
        if(rowData.title === 'Event 4'){
          date=<View>
          <Text style={styles.datestyle1}>28</Text>
          <Text style={styles.datestyle2}>Sept</Text>
        </View>;
          }
        if(date){
        return <View style={styles.timeStyle}>
          {date}
        </View>
        }else{
          return <View style={styles.timeStyle}>
          {time}
        </View>
        }
      }
    

    function renderDetail(rowData) {
      let title = <Text style={{color:'gray', fontSize: 25, fontWeight: 'bold'}}>{rowData.title}</Text>
      var desc = null;
      var t="";
    if(rowData.title === 'Event 1')
      setEvent1(!event1);
    if(rowData.title === 'Event 2')
      setEvent2(!event2);
    if(rowData.title === 'Event 3')
      setEvent3(!event3);
    if(rowData.title === 'Event 4')
      setEvent4(!event4);
    if(rowData.title === 'Event 5')
      setEvent5(!event5);
    // console.log(event1);
      // console.log(rowData.description);
      if(rowData.description){

        desc = (
          <View>
            <Text style={{fontSize: 16}}>{rowData.description}</Text>
          </View>
        )
        }
      return (
        <View style={styles.descriptionStyle}>
          {title}
          <Text style={{fontSize: 14}}>{rowData.time}</Text>
          {desc}
        </View>
      )
    }
    return(
      <Container>
      <Header style={{backgroundColor:"#27a5ef"}}>
      <Left>
        <Button transparent onPress={() => props.navigation.openDrawer()}>
          <Icon name="menu"></Icon>
        </Button>
      </Left>
      <Body style={{alignContent:"center"}}>
        <Text style={{color:"#FFFFFF",fontWeight:"bold",fontSize:26}}>Timeline</Text>
      </Body>
    </Header>
    <ImageBackground source={require("./bg.jpg")} style={styles.image}>
    <Timeline style={{ alignContent: 'center',}}
          data={data1}
          // columnFormat='two-column'
          circleSize={20}
          innerCircle={'dot'}
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          circleSize={55}
          separatorStyle={{marginTop: 10}}
          renderFullLine={true}
        
          renderTime={renderTime}
          
          // onEventPress={console.log(data[0].title)}
          titleStyle={{color:'gray', backgroundColor: "#fff", width: '75%', paddingLeft: '5%', marginLeft: '5%', borderRadius:13}}
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          // timeStyle={{textAlign: 'center',margin: 10, backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray', backgroundColor: "#fff", width: '84%', paddingLeft: '5%',
          fontSize: 15, marginLeft: '5%', borderRadius:13, marginBottom: 20}}
          
          onEventPress={() => Alert.alert("you have press on event ")}
          renderEvent={renderDetail}
          renderDetail= {renderDetail}
          options={{
            style:{paddingTop:25,}

          }
          }
        />
        </ImageBackground>
        </Container>

    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  descriptionStyle: { color:'gray', backgroundColor: "#fff", width: '75%', paddingLeft: '5%',
          fontSize: 15, marginLeft: '5%', borderRadius:13, marginBottom: 20, borderRadius:13},
  timeStyle: {textAlign: 'center',
    // margin: 2,
    backgroundColor:'#00000000', 
    color:'white', padding:5,
    borderRadius:13,
    fontSize: 22,
    maxHeight: 35,
    width: 75
  },
  datestyle: {
    fontSize: 18,
    color: 'gray'
  },
  datestyle1: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  datestyle2: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
});

export default Timeline1;