"use client"

import { toast as sonner } from "sonner"

export function useToast()
{
    return {
        toast: (options: {
            title?: string
            description?: string
            action?: React.ReactNode
        }) =>
        {
            sonner(options.title ?? "", {
                description: options.description,
                action: options.action,
            })
        },
    }
}
