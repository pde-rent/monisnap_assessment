package types

type Link struct {

	Table string
	Type string
	By string // select column name (pk)
	Target string // return column name (fk)
}
