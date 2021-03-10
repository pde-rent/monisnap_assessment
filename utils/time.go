package utils

import (
	"github.com/jackc/pgtype"
	"time"
)

func Now() time.Time {
	return time.Now()
}

func NowEpoch() int64 {
	return Now().Unix()
}

func NowStr() string {
	return Now().Format(time.RFC3339)
}

func TimeToEpoch(t time.Time) int64 {

	return t.Unix()
}

func EpochToTimestampTz(epoch int64) pgtype.Timestamptz {//time.Time {

	if epoch <= 0 {
		return pgtype.Timestamptz{Status: pgtype.Null}
	}
	return pgtype.Timestamptz{Time: EpochToTime(epoch), Status: pgtype.Present}
}

func TimestampTzToEpoch(t pgtype.Timestamptz) int64 {//time.Time {

	if t.Status == pgtype.Null {
		return 0
	}
	return t.Time.Unix()
}

func EpochToTime(epoch int64) time.Time {//time.Time {

	if epoch <= 0 {
		return time.Time{}
	}
	return time.Unix(epoch, 0)
}
