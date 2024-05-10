import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;

const Calculator = () => {
    const [answerValue, setAnswerValue] = useState("0");
    const [readyToReplace, setReadyToReplace] = useState(true);
    const [memoryValue, setMemoryValue] = useState("");
    const [operatorValue, setOperatorValue] = useState("");

    const handleNumber = (value) => {
        if (readyToReplace || answerValue === "0") {
            if (value === ".") {
                return "0.";
            } else {
                return value.toString();
            }
        } else {
            if (value === "." && answerValue.includes(".")) {
                return answerValue;
            } else {
                return answerValue.toString() + value.toString();
            }
        }
    };
    

    const buttonPressed = (value) => {
        if (!isNaN(value)) {
            const updatedValue = handleNumber(value.toString());
            setReadyToReplace(false);
            setAnswerValue(updatedValue);
        } else if (value === "C") {
            clearAll();
        } else if (value === "x" || value === "/" || value === "+" || value === "-") {
            if (operatorValue) {
                calculateEquals();
                setOperatorValue(value);
                setReadyToReplace(true);
            } else {
                setMemoryValue(answerValue);
                setOperatorValue(value);
                setReadyToReplace(true);
            }
        } else if (value === "=") {
            calculateEquals();
        } else if (value === "+/-") {
            changeSign();
        } else if (value === "%") {
            calculatePercentage();
        }
    };

    const clearAll = () => {
        setAnswerValue("0");
        setMemoryValue("");
        setOperatorValue("");
        setReadyToReplace(true);
    };

    const calculateEquals = () => {
        const previous = parseFloat(memoryValue);
        const current = parseFloat(answerValue);
        let result = 0;

        switch (operatorValue) {
            case "x":
                result = previous * current;
                break;
            case "/":
                result = previous / current;
                break;
            case "+":
                result = previous + current;
                break;
            case "-":
                result = previous - current;
                break;
            default:
                return result;
        }

        setAnswerValue(result.toString());
        setOperatorValue("");
        setMemoryValue("");
        setReadyToReplace(true);
    };

    const changeSign = () => {
        if (answerValue !== "0") {
            const newValue = (parseFloat(answerValue) * -1).toString();
            setAnswerValue(newValue);
        }
    };

    const calculatePercentage = () => {
        const perValue = (parseFloat(answerValue) * 0.01).toString();
        setAnswerValue(perValue);
    };

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text style={styles.textElement}>{answerValue}</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => buttonPressed("C")}>
                        <Text style={styles.buttonText}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => buttonPressed("+/-")}>
                        <Text style={styles.buttonText}>+/-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => buttonPressed("%")}>
                        <Text style={styles.buttonText}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => buttonPressed("/")}>
                        <Text style={styles.buttonText}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    {[7, 8, 9, "x"].map((value) => (
                        <TouchableOpacity key={value} style={styles.button} onPress={() => buttonPressed(value)}>
                            <Text style={styles.buttonText}>{value}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.row}>
                    {[4, 5, 6, "-"].map((value) => (
                        <TouchableOpacity key={value} style={styles.button} onPress={() => buttonPressed(value)}>
                            <Text style={styles.buttonText}>{value}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.row}>
                    {[1, 2, 3, "+"].map((value) => (
                        <TouchableOpacity key={value} style={styles.button} onPress={() => buttonPressed(value)}>
                            <Text style={styles.buttonText}>{value}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.zeroButton} onPress={() => buttonPressed(0)}>
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => buttonPressed(".")}>
                        <Text style={styles.buttonText}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.operatorButton} onPress={() => buttonPressed("=")}>
                        <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Calculator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center",
    },
    textElement: {
        color: "black",
        fontSize: 70,
        textAlign: "left",
        marginTop: 20,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
    },
    button: {
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000",
        height: windowWidth / 7,
        width: windowWidth / 7,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    zeroButton: {
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000",
        height: windowWidth / 7,
        width: windowWidth / 3.5,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    operatorButton: {
        backgroundColor: "#ff6666",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000",
        height: windowWidth / 7,
        width: windowWidth / 7,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 30,
        color: "black",
    },
});