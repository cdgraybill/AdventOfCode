package common

import (
	"os"
	"strings"
)

func ParseInput() []string {
	data, err := os.ReadFile("day1.txt")
	if err != nil {
		panic(err)
	}

	lines := strings.Split(strings.TrimSpace(string(data)), "\n")

	return lines
}
