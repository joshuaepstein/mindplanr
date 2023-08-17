export default function ChangelogsPage() {
    return (
        <>
            <div className="w-full h-14 bg-zinc-100 grid place-items-center">
                Navigation
            </div>

            <section className="container flex items-center justify-center flex-col min-h-[40vh]">
                <p className="px-1.5 py-0.5 bg-zinc-50 border border-zinc-300 text-zinc-400 rounded-full font-medium w-max text-sm">
                    CHANGELOG
                </p>
                <h3 className="font-riffic text-4xl mt-4">What's New?</h3>
                <p className="text-sm text-zinc-400 mt-2 font-medium">A rundown of all things new in the Mindplanr application.</p>
            </section>

            <section className="container flex items-start justify-start flex-col">
                <div className="w-full flex justify-between">
                    <div className="flex items-start justify-center space-x-5">
                        <div className="flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-green-300" />
                            <p className="font-semibold text-zinc-400 ml-2 text-sm">Feature</p>
                        </div>
                        
                        <div className="flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-orange-300" />
                            <p className="font-semibold text-zinc-400 ml-2 text-sm">Design</p>
                        </div>
                    </div>
                    <p className="font-semibold text-zinc-900 text-sm">Aug 17 2023</p>
                </div>

                <div className="flex justify-start items-end mt-3">
                    <h3 className="font-semibold text-3xl">Update Title</h3>
                    <p className="text-xs text-zinc-300 mb-1 ml-2">v1.0</p>
                </div>
                <p className="text-sm text-zinc-400 mt-2">Short description of the update will be placed inside of this text area here</p>
            </section>
        </>
    )
}