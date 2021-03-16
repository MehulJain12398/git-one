var one = {
    "environment": "test",
    "name": "Payload",
    "organization": "mehuljain-eval",
    "revision": [
        {
            "configuration": {
                "basePath": "/",
                "configVersion": "SHA-512:a755ec78cc174ec00e5d4a9981bf6085395f4834f1bad2c766e8d7d1509e5c4c32a6f3695a76a5c878a77219a5ec833f99ef549578e3225c37391298594746a8",
                "steps": []
            },
            "name": "2",
            "server": [
                {
                    "pod": {
                        "name": "rgce1mp001-15",
                        "region": "us-central1"
                    },
                    "status": "deployed",
                    "type": [
                        "message-processor"
                    ],
                    "uUID": "90115d8c-33ad-4e26-8fa8-e49ff5b86cad"
                },
                {
                    "pod": {
                        "name": "rgce1mp001-15",
                        "region": "us-central1"
                    },
                    "status": "deployed",
                    "type": [
                        "message-processor"
                    ],
                    "uUID": "59e0b719-d6fa-4e23-b5a4-8dd82ef688d6"
                },
                {
                    "pod": {
                        "name": "rgce1mp001-15",
                        "region": "us-central1"
                    },
                    "status": "deployed",
                    "type": [
                        "message-processor"
                    ],
                    "uUID": "a5667e63-c785-4cdf-995e-e1b409746eac"
                },
                {
                    "pod": {
                        "name": "rgce1mp001-15",
                        "region": "us-central1"
                    },
                    "status": "deployed",
                    "type": [
                        "message-processor"
                    ],
                    "uUID": "7d224d93-ca5e-4f63-adee-6242e217a3b8"
                },
                {
                    "pod": {
                        "name": "rgce1rt001-15",
                        "region": "us-central1"
                    },
                    "status": "deployed",
                    "type": [
                        "router"
                    ],
                    "uUID": "8331c9b1-e2a8-4c48-95f1-88d30836d645"
                },
                {
                    "pod": {
                        "name": "rgce1rt001-15",
                        "region": "us-central1"
                    },
                    "status": "deployed",
                    "type": [
                        "router"
                    ],
                    "uUID": "4a5cb086-7abb-4f1c-bc7c-d21f95794a6a"
                },
                {
                    "pod": {
                        "name": "rgce1rt001-15",
                        "region": "us-central1"
                    },
                    "status": "deployed",
                    "type": [
                        "router"
                    ],
                    "uUID": "23270cf5-bfe3-4eae-b208-52093a62183a"
                }
            ],
            "state": "deployed"
        }
    ]
}


console.log(one.revision[0].name)