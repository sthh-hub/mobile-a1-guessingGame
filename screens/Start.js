import React, { useState } from 'react';

export default function Start() {
    const appName = "Summer 2024 class";

    const [receivedText, setReceivedText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [goals, setGoals] = useState([]);
  
    // To receive data add a parameter
    function handleInputData(data) {
      console.log("callback fn called with data: ", data);
      setReceivedText(data);
      setModalVisible(false);
  
      // define a new object {text:.., id:..}
      const newGoal = { text: data, id: Math.random().toString() };
      // use updater function when updating the state variable based on existing state
      setGoals((currentGoals) => {
        return [...currentGoals, newGoal];
      });
    }
    function handleInputCancel(isVisible) {
      console.log("callback fn called with data: ", isVisible);
      setModalVisible(isVisible);
    };
  
    function handleDeleteGoal(deletedId) {
      console.log("delete goal with id: ", deletedId);
      setGoals((currentGoals) => {
        return currentGoals.filter((goal) => {
          return goal.id !== deletedId;
        });
      });
    }
  
  
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Header name={appName} theme="dark">
            {/* <Text> This is a child component</Text>
          <Text> This is another child component</Text> */}
          </Header>
          <View style={styles.buttonStyle}>
            <Button title="Add a goal" onPress={() => { setModalVisible(true) }}></Button>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          {/* set up a callback function */}
          {goals.length === 0 ? (
            <Text>Please Add a Goal</Text>
          ) : (
            <FlatList
              renderItem={({ item }) => {
                return <GoalItem goal={item} deleteHandler={handleDeleteGoal} />;
              }}
              data={goals}
            />
            // <ScrollView>
            //   {goals.map((goalObj) => {
            //     console.log(goalObj);
            //     return (
            //       <View key={goalObj.id} style={styles.textContainer}>
            //         <Text style={styles.textSytle}>{goalObj.text}</Text>
            //       </View>
            //     );
            //   })}
            // </ScrollView>
          )}
          <View style={styles.textContainer}>
            <Input inputHandler={handleInputData} inputCanceler={handleInputCancel} isModalVisible={modalVisible} />
            {/* use the state variable to render the received data */}
            {/* <Text>{receivedText}</Text> */}
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    );



}