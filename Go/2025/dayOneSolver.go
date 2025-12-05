package main

import (
	"os"
	"strconv"
	"strings"
)

func main() {
	lines := parseInput()

	dial := 50
	answer := 0

	for i := range lines {
		dial, answer = turnDial(dial, answer, lines[i])
	}

	println(answer)
}

func turnDial(dial int, answer int, instruction string) (int, int) {
	direction := string(instruction[0])
	turns, _ := strconv.Atoi(strings.TrimSpace(instruction[1:]))

	for i := 0; i < turns; i++ {
		if direction == "L" {
			if dial == 0 {
				dial = 99
			} else {
				dial--
			}
		} else {
			if dial == 99 {
				dial = 0
			} else {
				dial++
			}
		}
	}

	if dial == 0 {
		answer++
	}

	return dial, answer
}

func parseInput() []string {
	data, err := os.ReadFile("dayOne.txt")
	if err != nil {
		panic(err)
	}

	lines := strings.Split(strings.TrimSpace(string(data)), "\n")

	return lines
}
