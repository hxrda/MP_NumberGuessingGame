import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

export default function App() {
	//States:
	const [message, setMessage] = useState("");
	const [randomNumber, setRandomNumber] = useState(0);
	const [guess, setGuess] = useState("");
	const [count, setCount] = useState(0);

	//Functions:
	useEffect(() => {
		startGame();
	}, []);

	const startGame = () => {
		//Generate & save random number:
		//setRandomNumber(Math.floor(Math.random() * 100) + 1);
		setRandomNumber((prevRandomNumber) => Math.floor(Math.random() * 100) + 1);
		console.log("generatedNumber: " + randomNumber);

		//Initialze message:
		setMessage("Guess a number between 1-100");

		//Reset counts:
		//setCount(0);
		setCount((prevCount) => 0);
		console.log("initialCounts: " + count);
	};

	const compareGuess = () => {
		const numericGuess = parseFloat(guess);

		setCount((prevCount) => prevCount + 1);
		console.log("count: " + count);

		if (numericGuess == randomNumber) {
			//setCount(count + 1);
			//setCount((prevCount) => prevCount + 1);
			//console.log("count: " + count);
			//Alert.alert("You guessed the number in " + count + " guesses");
			//startGame();
			Alert.alert("You guessed the number in " + (count + 1) + " guesses", "", [
				{
					text: "OK",
					onPress: () => startGame(),
				},
			]);
		} else if (numericGuess < randomNumber) {
			setMessage("Your guess " + numericGuess + " is too low");
			//setCount(count + 1);
			//setCount((prevCount) => prevCount + 1);
			//console.log("count: " + count);
		} else {
			setMessage("Your guess " + numericGuess + " is too high");
			//setCount(count + 1);
			//setCount((prevCount) => prevCount + 1);
			//console.log("count: " + count);
		}
	};

	//Rendering
	return (
		<View style={styles.container}>
			<Text>{message}</Text>
			<TextInput
				style={styles.textInputContainer}
				onChangeText={(guessValue) => setGuess(guessValue)}
			/>
			<Button title="Make Guess" onPress={compareGuess} />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
	},
	textInputContainer: {
		width: 200,
		borderColor: "gray",
		borderWidth: 1,
	},
});
