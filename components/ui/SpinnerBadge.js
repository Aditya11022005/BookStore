import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

const SpinnerBadge = () => {
  return (
    <div className="flex items-center gap-4 [--radius:1.2rem]">
      <Badge variant="outline">
        <Spinner />
        Processing please wait...
      </Badge>
    </div>
  )
}

export default SpinnerBadge
