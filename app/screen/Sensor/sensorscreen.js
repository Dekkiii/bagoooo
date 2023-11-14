import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HumanPose from 'react-native-human-pose';

const angleThreshold = 120; // Adjust this threshold as needed

export const Sensorscreen = () => {
  const [noOfSquats, setNoOfSquats] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const calculateAngle = (joint1, joint2, joint3) => {
    const radians = Math.atan2(joint3.y - joint2.y, joint3.x - joint2.x) - Math.atan2(joint1.y - joint2.y, joint1.x - joint2.x);
    let angle = Math.abs((radians * 180.0) / Math.PI);

    // Ensure angle is within 0 to 360 degrees
    if (angle > 180) {
      angle = 360 - angle;
    }

    return angle;
  };

  const onPoseDetected = (pose) => {
    if (!isCounting) {
      return;
    }

    const leftHip = pose[0]?.pose?.leftHip;
    const leftKnee = pose[0]?.pose?.leftKnee;
    const leftAnkle = pose[0]?.pose?.leftAnkle;

    if (leftHip && leftKnee && leftAnkle) {
      const hipKneeAnkleAngle = calculateAngle(leftHip, leftKnee, leftAnkle);

      // Logic to determine squat position
      // ...

      // You might want to update the logic here based on your requirements
    }
  };

  useEffect(() => {
    // Update the logic here based on your requirements
    // ...

    // For now, I'm incrementing the count on each pose detection
    setNoOfSquats((prevCount) => prevCount + 1);
  }, [isCounting]);

  const handleToggle = () => {
    setIsCounting((prevIsCounting) => !prevIsCounting);
    setNoOfSquats(0); // Reset count when toggling
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={styles.button} onPress={handleToggle}>
        <Text>{isCounting ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>

      <Text>Human Pose</Text>
      <HumanPose
        height={500}
        width={400}
        enableKeyPoints={true}
        enableSkeleton={true}
        flipHorizontal={false}
        isBackCamera={false}
        color={'255, 0, 0'}
        onPoseDetected={onPoseDetected}
      />

      <Text
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: 'center',
          textShadowColor: 'black',
          backgroundColor: 'white',
          padding: 10,
          fontSize: 20,
        }}>
        No of Squats: {noOfSquats}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: 'center',
  },
});

export default Sensorscreen;
