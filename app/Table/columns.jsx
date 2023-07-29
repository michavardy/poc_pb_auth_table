"use client"

import { ColumnDef } from "@tanstack/react-table"

export const columns = [
    {
        accessorKey: "first_name",
        header: "first_name",
    },
    {
        accessorKey: "last_name",
        header: "last_name",
    },
    {
        accessorKey: "email",
        header: "email",
    },
    {
        accessorKey: "birthdate",
        header: "birthdate",
    },
    {
        accessorKey: "message",
        header: "message",
    }
]