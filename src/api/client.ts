export async function client(endpoint: string, { body, ...customConfig } = {} as clientType) {
  const headers = { 'Content-Type': 'application/json' }
  const base_url = "https://my-json-server.typicode.com/berkkarslan/todo-server";
  const config: RequestInit = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
       ...headers
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  let data
  try {
    const response = await window.fetch(base_url + endpoint, config)
    data = await response.json()
    if (response.ok) {
      // Return a result object similar to Axios
      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url,
      }
    }
    throw new Error(response.statusText)
  } catch (err) {
    let message = "Unknown Error";
    if (err instanceof Error) message = err.message;
    return Promise.reject(message ? message : data)
  }
}

client.get = function (endpoint: string, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'GET' })
}

client.post = function (endpoint: string, body: unknown, customConfig = {}) {
  return client(endpoint, { ...customConfig, body })
}

client.delete = function (endpoint: string, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'DELETE'  })
}

client.put = function (endpoint: string, body: unknown, customConfig = {}) {
  return client(endpoint, { ...customConfig, body, method: 'PUT'  })
}
