package common

import (
	"os"
	"strings"
)

func SplitInputByDelimiter(filePath string, delimiter string) []string {
	data, err := os.ReadFile(filePath)
	if err != nil {
		panic(err)
	}

	lines := strings.Split(strings.TrimSpace(string(data)), delimiter)

	return lines
}
