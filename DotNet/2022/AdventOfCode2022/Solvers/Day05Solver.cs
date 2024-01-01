using System.Text;

namespace AdventOfCode2022.Solvers
{
    public class Day05Solver
    {
        public List<string> Crates = File.ReadLines(@"C:ProblemInputs\Day05Input_Crates.txt").ToList();
        public List<string> Moves = File.ReadLines(@"C:ProblemInputs\Day05Input_Moves.txt").ToList();

        public List<string> SampleCrates = File.ReadLines(@"C:SampleInputs\Day05SampleInput_Crates.txt").ToList();
        public List<string> SampleMoves = File.ReadLines(@"C:SampleInputs\Day05SampleInput_Moves.txt").ToList();

        public string SolvePartOne(List<string> moves, List<string> crates)
        {
            var finalCrateMap = GetFinalCrateMapPartOne(moves, crates);
            var topRow = GetTopRow(finalCrateMap);

            return topRow;
        }

        public string SolvePartTwo(List<string> moves, List<string> crates)
        {
            var finalCrateMap = GetFinalCrateMapPartTwo(moves, crates);
            var topRow = GetTopRow(finalCrateMap);

            return topRow;
        }

        private static string GetTopRow(List<Stack<char>> finalCrateMap)
        {
            var topRow = new StringBuilder();
            foreach (var row in finalCrateMap)
            {
                topRow.Append(row.First());
            }

            return topRow.ToString();
        }

        private List<Stack<char>> GetFinalCrateMapPartOne(List<string> moves, List<string> crates)
        {
            var finalCrateMap = ParseCrateInput(crates);

            foreach (var row in moves)
            {
                var moveSet = GetMoveSet(row);

                for (int i = 0; i < moveSet.NumberOfCrates; i++)
                {
                    var crateToMove = finalCrateMap[moveSet.StartingStack - 1].Pop();
                    finalCrateMap[moveSet.EndingStack - 1].Push(crateToMove);
                }
            }

            return finalCrateMap;
        }

        private List<Stack<char>> GetFinalCrateMapPartTwo(List<string> moves, List<string> crates)
        {
            var finalCrateMap = ParseCrateInput(crates);

            foreach (var row in moves)
            {
                var moveSet = GetMoveSet(row);
                var cratesToMove = new Stack<char>();

                for (int j = 0; j < moveSet.NumberOfCrates; j++)
                {
                    var crate = finalCrateMap[moveSet.StartingStack - 1].Pop();
                    cratesToMove.Push(crate);
                }

                cratesToMove.Reverse();

                foreach (var crate in cratesToMove)
                {
                    finalCrateMap[moveSet.EndingStack - 1].Push(crate);
                }
                
            }

            return finalCrateMap;
        }

        public List<Stack<char>> ParseCrateInput(List<string> crates)
        {
            var numberOfStacks = int.Parse(crates.Last()[crates.Last().Length - 2].ToString());
            crates.RemoveAt(crates.Count - 1);
            crates.Reverse();

            var newCrateMap = new List<Stack<char>>();

            for (int i = 0; i < numberOfStacks; i++)
            {
                newCrateMap.Add(new Stack<char>());
            }

            for (int i = 0; i < crates.Count; i++)
            {
                foreach(var crate in ExtractCrates(crates[i]))
                {
                    newCrateMap[crate.StackId - 1].Push(crate.Name);
                }
            }

            return newCrateMap;
        }

        private IEnumerable<Crate> ExtractCrates(string crateRow)
        {
            var stackId = 1;

            for (int i = 1; i < crateRow.Length; i+=4)
            {
                if (crateRow[i] != ' ')
                {
                    var crate = new Crate()
                    {
                        Name = crateRow[i],
                        StackId = stackId
                    };

                    yield return crate;
                }

                stackId++;
            }
        }

        public MoveSet GetMoveSet(string row)
        {
            var substring = row.Substring(row.Length - 6);

            var moveSet = new MoveSet()
            {
                NumberOfCrates = GetNumberOfCrates(row),
                StartingStack = int.Parse(substring[0].ToString()),
                EndingStack = int.Parse(substring[5].ToString())
            };

            return moveSet;
        }

        private int GetNumberOfCrates(string line)
        {
            var sb = new StringBuilder();
            sb.Append(line[5]);

            if (line[6] != ' ')
                sb.Append(line[6]);

            return int.Parse(sb.ToString());
        }
    }

    internal class Crate
    {
        public char Name { get; set; }
        public int StackId { get; set; }
    }

    public class MoveSet
    {
        public int NumberOfCrates { get; set; }
        public int StartingStack { get; set; }
        public int EndingStack { get; set; }
    }
}
